using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour {
	
	public static int s_width;
	public static int s_height;

	// Use this for initialization
	void Start () {
		s_width = Screen.width;
		s_height = Screen.height;
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.Escape))
			Application.Quit();
	}
	
	void OnGUI () {
		int b_width = 200;
		int b_height = 50;
		
		if(GUI.Button(new Rect ((s_width-b_width)/2,(s_height)/2,b_width,b_height), "Scene 1")){
			Application.LoadLevel("level1");
		}
		/*if(GUI.Button(new Rect ((s_width-b_width)/2,(s_height)/2+b_height+10,b_width,b_height), "Scene 2")){
			Debug.Log("Btn 2");
		}*/
	}
}
