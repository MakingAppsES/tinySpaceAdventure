#pragma strict
static var nivelAlcanzado:int;
 
function Start () {
	nivelAlcanzado = PlayerPrefs.GetInt("nivelAlcanzado", -1);
}

function Update () {
	if (nivelAlcanzado > PlayerPrefs.GetInt("nivelAlcanzado", -1))
		PlayerPrefs.SetInt("nivelAlcanzado", nivelAlcanzado);
}