var picture = require('cat-picture')
var src = picture.src
picture.remove
var image = require('lightning-image-poly')

var viz = new image('#visualization',null, [src], {hullAlgorithm: 'convex'})
var remote = require('electron').remote
var fs = require('fs')

function save(){
    console.log(remote)
    remote.getCurrentWebContents().printToPDF({
        potrait: true
    }, function (err, data){
        fs.writeFile('annotation.pdf', data, function (err){
            if(err) alert('error generating pdf! ' + err.message)
            else alert('pdf saved!')
        })
    })
}

window.addEventListener('keydown', function (e){
    this.console.log(e)
    if(e.keyCode == 80) {
        save()
    }
})