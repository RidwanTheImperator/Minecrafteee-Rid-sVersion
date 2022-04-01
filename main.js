canvas = new fabric.Canvas("Canva")

px = 10
py = 10

bw = 30
bh = 30

player_object = ""
block_img = ""

function playeru () {
    fabric.Image.fromURL("player.png", function(e) {
        player_object = e

        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)

        player_object.set( {
            top: py, 
            left: px
        } );
        canvas.add(player_object);
    } )
}

function new_object (get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_img = Img;

        block_img.scaleToWidth(bw)
        block_img.scaleToHeight(bh)

        block_img.set ({
            top: py,
            left: px
        }) 
        canvas.add(block_img)
    } )
}

window.addEventListener("keydown", mykeydown)

function mykeydown (kp) {
    keyPressed = kp.keyCode

    if (kp.shiftKey == true && keyPressed == "80") {
        bw = bw + 10
        bh = bh + 10
        document.getElementById("CW").innerHTML=bw
        document.getElementById("CH").innerHTML=bh
    }
    
    if (kp.shiftKey == true && keyPressed == "77") {
        bw = bw-10
        bh = bh-10
        document.getElementById("CW").innerHTML=bw
        document.getElementById("CH").innerHTML=bh
    }

    if (keyPressed == "37") {
        left()
    }

    if (keyPressed == "38") {
       up()
    }

    if (keyPressed == "39") {
        right()
    }

    if (keyPressed == "40") {
        down()
    }

    if (keyPressed == "87") {
        new_object("wall.jpg")
    }

    if (keyPressed == "71") {
        new_object("ground.png")
    }

    if (keyPressed == "76") {
        new_object("light_green.png")
    }
    if (keyPressed == "82") {
        new_object("roof.jpg")
    }

    if (keyPressed == "84") {
        new_object("trunk.jpg")
    }

    if (keyPressed == "89") {
        new_object("yellow_wall.png")
    }
    if (keyPressed == "68") {
        new_object("dark_green.png")
    }
    if (keyPressed == "67") {
        new_object("cloud.jpg")
    }
    if (keyPressed == "85") {
        new_object("unique.png")
    }
}

function up() {
    if (py >0) {
        py = py - bh
        canvas.remove(player_object)
        playeru()
    }
}

function down() {
    if (py <600) {
        py = py + bh
        canvas.remove(player_object)
        playeru()
    }
}

function right() {
    if (px <900) {
        px = px + bw
        canvas.remove(player_object)
        playeru()
    }
}
function left() {
    if (px >0) {
        px = px - bw
        canvas.remove(player_object)
        playeru()
    }
}