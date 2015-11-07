'use strict';

var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var bucket = 'secure-printwithpixy-com';

gulp.task('deploy', function() {
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
        process.exit(1);
    }
});

