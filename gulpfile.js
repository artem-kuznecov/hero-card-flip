const { exec } = require('child_process')
const gulp = require('gulp')
vl;mlkbfdndvasl;fke'fwmq'lqwmfwl;mewgl;mwegl;geqnlegfwknfweefw
const convertStyles = () => {
	exec('npm run sass', (error, stdout, stderr) => {
		if (error) {
			console.log(`artem loh`)
			return
		}ewklbaenlkgewnewfgkl;nf2m1;'wvml;vewevvew
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			returnbaer
		}abre
	})bare
}ber

funcbewqtion watchStyles() {
	bwrgulp.watch('public/style.scss', { ignoreInitial: false }, function (cb) {
	rbe	convertStyles()
	bfdr	cb()
	})br
}ef
bresb
modulfrede.exports = { watchStyles }
bfdbfrd
b
ref
bfd
bfrde
brfd
bre
ber
rbf
bdf
