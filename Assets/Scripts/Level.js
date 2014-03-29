#pragma strict

var s_w : int ;
var s_h : int ;
var finished : boolean;
var failed : boolean;
var pausa : boolean;
var nivel : int; // Nivel en el que estamos (se asigna en la escena)
private var exitTimer : float;

function pauseGame() {
	var objects = FindObjectsOfType (typeof(GameObject));
	for(var item : GameObject in objects){
		item.SendMessage ("OnPauseGame", SendMessageOptions.DontRequireReceiver);
	}
}

function resumeGame() {
	var objects = FindObjectsOfType (typeof(GameObject));
	for(var item : GameObject in objects){
		item.SendMessage ("OnResumeGame", SendMessageOptions.DontRequireReceiver);
	}
}

function Start () {
	//Debug.Log("Start level");
	//Time.timeScale = 1.0;
	
	finished = false;
	failed = false;
	pausa = false;
	exitTimer = 1.0;
	s_w = Screen.width;
	s_h = Screen.height;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape))
		pausa = true;
	
}


function OnGUI () {
	if (finished) {
		GUI.Box (Rect (s_w/4,s_h/4,s_w/2,s_h/2), "Nivel terminado");
		pauseGame();
		UserPrefs.nivelAlcanzado = nivel; // Ponemos el nivel alcanzado
		//Time.timeScale = 0.0;
		if(GUI.Button(new Rect ((s_w-s_w/4)/2,(s_h)/2,s_w/4,50), "Menu")){
		//	Time.timeScale = 1.0;
			resumeGame();
			Application.LoadLevel("mainmenu");
		}
	}
	else if (failed) {
		exitTimer -= Time.deltaTime;
		if(exitTimer<=0) {
			Application.LoadLevel("mainmenu");
		}
	}
	else if (pausa){
		GUI.Box (Rect (s_w/4,s_h/4,s_w/2,s_h/2), "Pausa");
		pauseGame();
		//Time.timeScale = 0.0;
		if(GUI.Button(new Rect ((s_w-s_w/4)/2,(s_h)/2,s_w/4,50), "Continuar")){
			pausa = false;
		}
		if(GUI.Button(new Rect ((s_w-s_w/4)/2,(s_h)/2+60,s_w/4,50), "Menu")){
			Application.LoadLevel("mainmenu");
		}
	}
	else {
		//Time.timeScale = 1.0;
		resumeGame();
	}
}