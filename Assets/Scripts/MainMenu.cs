using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour {
	
	public static int s_width;
	public static int s_height;
	public Texture2D tittleImg; // Titulo-logo del juego
	public Texture2D candado; // Imagen de un candado
	private int nivelAlcanzado;
	private static int numNiveles = 2; // Numero total de niveles

	// Use this for initialization
	void Start () {
		s_width = Screen.width;
		s_height = Screen.height;
		nivelAlcanzado = PlayerPrefs.GetInt("nivelAlcanzado", -1);
		print ("Lvl: "+PlayerPrefs.GetInt("nivelAlcanzado", -1));
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.Escape))
			Application.Quit();
	}
	
	void OnGUI () {
		int b_width = 200; // Button width
		int b_height = s_height/10; // Button height
		int y_base_button = s_height / 5 + tittleImg.height + 10;

		GUI.DrawTexture (new Rect ((s_width-tittleImg.width)/2,(s_height)/5,tittleImg.width,tittleImg.height), 
		           tittleImg);

		// Level 0 Button
		if(GUI.Button(new Rect ((s_width-b_width)/2,y_base_button,b_width,b_height), "Level 0")){
			Application.LoadLevel("level0");
		}
		
		// Level 1 Button
		if(GUI.Button(new Rect ((s_width-b_width)/2,y_base_button+(b_height+10)*1,b_width,b_height), "Level 1")){
			if (nivelAlcanzado >= 0)
				Application.LoadLevel("level1");
		}

		if(nivelAlcanzado != numNiveles-1)
			for(int i=nivelAlcanzado; i<numNiveles-2;i++)
				GUI.DrawTexture (new Rect ((s_width-b_width)/2,y_base_button+(b_height+10)*(i+2),candado.width,candado.height), 
		                 candado);
			
		// Reset nivelAlcanzado Button
		if(GUI.Button(new Rect ((s_width-70)/2,s_height-30-5,70,30), "Reset")){
			PlayerPrefs.SetInt("nivelAlcanzado", -1);
			Application.LoadLevel("mainmenu");
		}
	}
}
