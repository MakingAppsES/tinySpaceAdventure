#pragma strict

var prevAcel: Vector3; // Aceleracion previa
var acel: Vector3;     // Aceleracion actual
var sensH: float = 1;  // Sensibilidad Horiz
var sensV: float = 1;  // Sensibilidad Vert
var smooth: float = 0; // Suavidad de cambio
var GetAxisH: float = 0;
var GetAxisV: float = 0;
var paused : boolean = false;
var explosionPf : GameObject; // Prefab de la explosion

/**
 * Evalua si el cohete esta fuera de la zona de juego
 */
function estaFuera (){
	if (transform.position.x < 0 || transform.position.x > 100 ||
		transform.position.y < 0 || transform.position.y > 60 ) {
		return true;
	}
	else return false;
}

/**
 * Calibra los ejes
 */
function ResetAxes () {
	prevAcel = Input.acceleration;
	acel = Vector3.zero;
}

function Start () {
	ResetAxes();
	//Time.timeScale = 1.0;
	//Debug.Log("Start cohete");
}

/**
 * Funcion llamada cuando se le pasa el mensaje "OnPauseGame" a este objeto
 */
function OnPauseGame () {
	paused = true;
}

/**
 * Funcion llamada cuando se le pasa el mensaje "OnResumeGame" a este objeto
 */
function OnResumeGame () {
	paused = false;
}

/**
 *	Funcion llamada cuando el cohete choca con algo
 */
function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == 'Meta')
		gameObject.Find("Administrador").GetComponent(Level).finished = true;
	else {
		gameObject.Find("Administrador").GetComponent(Level).failed = true;
		var contact : Vector3 = collision.contacts[0].point;
		var expl : GameObject = Instantiate (explosionPf, contact-Vector3(0,0,10), Quaternion.identity);
		
		//Application.LoadLevel("mainmenu");
	}
}
    
function Update () { 
	if(!paused){
		acel = Vector3.Lerp(acel, Input.acceleration-prevAcel, Time.deltaTime/smooth);
		GetAxisV = Mathf.Clamp(acel.y * sensV, -1, 1);
		GetAxisH = Mathf.Clamp(acel.x * sensH, -1, 1);

		transform.Translate(GetAxisH,0,0);
		
		if(estaFuera()){
			Application.LoadLevel("mainmenu");
		}
	}
}
