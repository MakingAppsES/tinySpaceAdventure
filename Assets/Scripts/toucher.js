#pragma strict

var sistemaParticulas : ParticleSystem;
var cohete : GameObject;

function Start () {
	
}

function Update () {
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
	var ok = collider.Raycast (ray, hit, 100.0F); // el 3er param es la profundidad
	
    if (ok) {
    	if (Input.GetMouseButton(0)) {
	    	Debug.Log("Me has dado!");
			cohete.transform.Translate(0,0.2,0);
	    	sistemaParticulas.emissionRate = 20;
    	}
	    else {
	    	sistemaParticulas.emissionRate = 7;
			cohete.rigidbody.velocity.y = -3.13; // Gravedad constante simulada
	    }
    }
}