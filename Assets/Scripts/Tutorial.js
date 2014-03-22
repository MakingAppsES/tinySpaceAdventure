#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.Label(Rect(5,5,Screen.width,Screen.height),
	          "> Incline the phone to move the spaceship to the right and to the left");
	GUI.Label(Rect(5,20,Screen.width,Screen.height),
	          "> Touch the screen in order to propel the spaceship");
	GUI.Label(Rect(5,35,Screen.width,Screen.height),
	          "> Find the goal and land the spaceship there");
}