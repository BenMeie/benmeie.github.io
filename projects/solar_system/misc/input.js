function Input() {
	this.up = false;
	this.down = false;
	this.left = false;
    this.right = false;
    this.s = false;
    this.m = false;
    this.v = false;
    this.e = false;
    this.a = false;
    this.j = false;
    this.t = false;
    this.u = false;
    this.n = false;

    // -------------------------------------------------------------------------
    function onKeyUp(e) {
        if (e.key == "ArrowUp") { this.up = false; }
        if (e.key == "ArrowDown") { this.down = false; }
        if (e.key == "ArrowLeft") { this.left = false; }
        if (e.key == "ArrowRight") { this.right = false; }
        if (e.key == "s") { this.s = false; }
        if (e.key == "m") { this.m = false; }
        if (e.key == "v") { this.v = false; }
        if (e.key == "e") { this.e = false; }
        if (e.key == "a") { this.a = false; }
        if (e.key == "j") { this.j = false; }
        if (e.key == "t") { this.t = false; }
        if (e.key == "u") { this.u = false; }
        if (e.key == "n") { this.n = false; }
    }

    // -------------------------------------------------------------------------
    function onKeyDown(e) {
        if (e.key == "ArrowUp") { this.up = true; }
        if (e.key == "ArrowDown") { this.down = true; }
        if (e.key == "ArrowLeft") { this.left = true; }
        if (e.key == "ArrowRight") { this.right = true; }
        if (e.key == "s") { this.s = true; }
        if (e.key == "m") { this.m = true; }
        if (e.key == "v") { this.v = true; }
        if (e.key == "e") { this.e = true; }
        if (e.key == "a") { this.a = true; }
        if (e.key == "j") { this.j = true; }
        if (e.key == "t") { this.t = true; }
        if (e.key == "u") { this.u = true; }
        if (e.key == "n") { this.n = true; }
	}

	window.addEventListener('keydown', onKeyDown.bind(this));
    window.addEventListener('keyup', onKeyUp.bind(this));
}

// EOF 00100001-10