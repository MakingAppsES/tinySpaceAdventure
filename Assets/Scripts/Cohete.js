#pragma strict

var prevAcel: Vector3; // Aceleracion previa
var acel: Vector3;     // Aceleracion actual
var sensH: float = 1;  // Sensibilidad Horiz
var sensV: float = 1;  // Sensibilidad Vert
var smooth: float = 0; // Suavidad de cambio
var GetAxisH: float = 0;
var GetAxisV: float = 0;

/**
 *	Comprueba si el cohete esta fuera de la zona jugable 
 */
function estaFuera (){
	if (transform.position.x < 0 || transform.position.x > 100 ||
		transform.position.y < 0 || transform.position.y > 60 ) {
		return true;
	}
	else return false;
}

/**
 *	Calibra los ejes de inclinacion
 */
function ResetAxes () {
	prevAcel = Input.acceleration;
	acel = Vector3.zero;
}

function Start () {
	ResetAxes();
}

function OnCollisionEnter(collision : Collision) {
		Debug.Log("Cohete-collision");
		if(collision.gameObject.tag=="Meta"){
			print("WoW");
		}
		else
		Application.LoadLevel("mainmenu");
}
    
function Update () { 
	acel = Vector3.Lerp(acel, Input.acceleration-prevAcel, Time.deltaTime/smooth);
	GetAxisV = Mathf.Clamp(acel.y * sensV, -1, 1); // Inclinacion Vertical
	GetAxisH = Mathf.Clamp(acel.x * sensH, -1, 1); // Inclinacion Horizontal

	transform.Translate(GetAxisH,0,0); // horizontal translation
	transform.Translate(0,-0.05,0);    // simple gravity simulation 
	
	if(estaFuera()){
		Application.LoadLevel("mainmenu");
	}
}