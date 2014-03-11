#pragma strict

var cohete : GameObject;

var prevAcel: Vector3; // Aceleracion previa
var acel: Vector3;     // Aceleracion actual
var sensH: float = 1;  // Sensibilidad Horiz
var sensV: float = 1;  // Sensibilidad Vert
var smooth: float = 0; // Suavidad de cambio
var GetAxisH: float = 0;
var GetAxisV: float = 0;

var pinchado:boolean = false;
var dir:int;

function estaFuera (){
	if (transform.position.x < 0 || transform.position.x > 100 ||
		transform.position.y < 0 || transform.position.y > 60 ) {
		return true;
	}
	else return false;
}
function ResetAxes () {
	prevAcel = Input.acceleration;
	acel = Vector3.zero;
}

function Start () {
	ResetAxes();
}

function OnCollisionEnter(collision : Collision) {
		print("hit");
		Application.LoadLevel("mainmenu");
}
    
function Update () { 
	acel = Vector3.Lerp(acel, Input.acceleration-prevAcel, Time.deltaTime/smooth);
	GetAxisV = Mathf.Clamp(acel.y * sensV, -1, 1);
	GetAxisH = Mathf.Clamp(acel.x * sensH, -1, 1);

	transform.Translate(GetAxisH,0,0);
	//transform.Translate(0,0,movV);
	
	
	/*var movH = Input.GetAxis("Horizontal");
	var movV = Input.GetAxis("Vertical");*/
	
	/*if(movV > 0.0) {
		if(!pinchado) {
			rigidbody.AddRelativeForce(0,100,0);
			pinchado = true;
		}
		//transform.Translate(0,movV,0);
	}
	else {
		if(pinchado) {
			rigidbody.AddRelativeForce(0,-100,0);
			pinchado = false;
		}
		resetGravity();
	}*/
	/*if(movV > 0.0)
	transform.Translate(0,0.2,0);
	else*/
	transform.Translate(0,-0.05,0);
	//print("movV -> "+movV);
	
	//transform.Translate(movH,0,0);
	
	if(estaFuera()){
		Application.LoadLevel("mainmenu");
	}
}