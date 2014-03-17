#pragma strict

var sistemaParticulas : ParticleSystem;
var cohete : GameObject;
var paused : boolean = false;

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

function Start () {
	
}

function Update () {
	if (!paused) {
	    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	    var hit : RaycastHit;
		var ok = collider.Raycast (ray, hit, 100.0F); // el 3er param es la profundidad
		
	    if (ok) {
	    	if (Input.GetMouseButton(0)) {
		    	//Debug.Log("Me has dado!");
				cohete.transform.Translate(0,0.2,0);
		    	sistemaParticulas.emissionRate = 20;
	    	}
		    else {
		    	sistemaParticulas.emissionRate = 7;
				cohete.rigidbody.velocity.y = -3.13; // Gravedad constante simulada
		    }
	    }
    }
    else {
    	cohete.rigidbody.velocity.y = 0.0;
    }
}