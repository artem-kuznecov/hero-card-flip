const { exec } = require('child_process')
const gulp = require('gulp')

const convertStyles = () => {
	exec('npm run sass', (error, stdout, stderr) => {
		if (error) {
			console.log(`error o: ${error.message}`)
			return
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			return
		}
	})
}

function watchStyles() {
	gulp.watch('src/style.scss', { ignoreInitial: false }, function (cb) {
		convertStyles()
		cb()
	})
}

module.exports = { watchStyles }
