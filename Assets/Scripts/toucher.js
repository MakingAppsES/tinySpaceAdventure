#pragma strict

var activado : boolean;
var sistemaParticulas : GameObject;
var cohete : GameObject;
var time : int;

function Start () {
	time = 0;
}

function Update () {
	//if (Input.GetMouseButton(0)) {
		    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		    var hit : RaycastHit;
			var ok = collider.Raycast (ray, hit, 100.0F); // el 3er param es la profundidad
			
		    if (ok) {//(collider && collider.Raycast (ray, hit, 100.0)) {
		    	//OnMouseDown();
		    	if (Input.GetMouseButton(0)) {
			    	Debug.Log("Me has dado!");
			    	//rigidbody.AddRelativeForce(0,1000,0);
					cohete.transform.Translate(0,0.2,0);
					
			    	activado = true;
			    	sistemaParticulas.SetActive(true);
		    	}
			    else {
			    	time += 1;
			    	//activado = false;
			    	//sistemaParticulas.SetActive(false);
			    }
		    }
		    else {
			    time += 1;
		    	//activado = false;
		    	//sistemaParticulas.SetActive(false);
		    }
		    
		    if (time > 100) {
			    activado = false;
			    sistemaParticulas.SetActive(false);
			    time = 0;
			}
   // }
}