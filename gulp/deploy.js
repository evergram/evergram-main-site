'use strict';

var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var inject = require('gulp-inject-string');
var gutil = require('gulp-util');
var bucket = 'secure-printwithpixy-com';

gulp.task('config:production', function() {
    gutil.log('Setting production config.');
    // sets the production config overrides
    gulp.src('./dist/index.html')
        .pipe(inject.after('</title>', '<script>window.IS_PROD=true;</script>'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', ['config:production'], function() {
    if (!!process.env.AWS_ACCESS_KEY_ID && !!process.env.AWS_SECRET_ACCESS_KEY) {

        var publisher = awspublish.create({
            params: {
                Bucket: bucket
            },
            accessKeyId: process.env.AWS_ACCESS_KEY_ID.trim(),
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY.trim()
        });

        return gulp.src('./dist/**')
            .pipe(publisher.publish())
            .pipe(publisher.sync())
            .pipe(awspublish.reporter());
    } else {
        gutil.log('AWS credentials are not set.');
        gutil.log('AWS_ACCESS_KEY_ID');
        gutil.log('AWS_SECRET_ACCESS_KEY');

        process.exit(1);
    }
});

