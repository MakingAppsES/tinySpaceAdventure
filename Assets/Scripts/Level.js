#pragma strict

var s_w : int ;
var s_h : int ;
var finished : boolean;

function Start () {
	if (Input.GetKeyDown(KeyCode.Escape))
		Application.LoadLevel("mainmenu");
	finished = false;
	s_w = Screen.width;
	s_h = Screen.height;
}

function Update () {
	
}


function OnGUI () {
	if (finished) {
		GUI.Box (Rect (s_w/4,s_h/4,s_w/2,s_h/2), "Nivel terminado");
	}
}