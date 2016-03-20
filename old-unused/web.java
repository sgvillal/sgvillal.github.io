import java.applet.*;
import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
public class web extends Applet implements ActionListener{

    /*public static void main(String[] args) {
        //Schedule a job for the event-dispatching thread:
        //creating and showing this application's GUI.
       // javax.swing.SwingUtilities.invokeLater(new Runnable() 
      start s = new start();
      s.createAndShowGUI();
      s.setVisible(true);   
    }*/
            public void init() {
              setBackground(Color.yellow);
              start s = new start();
              add(s);
           //  s.createAndShowGUI();
            }
       // });
  // }
  public void actionPerformed(ActionEvent ae){
  
  }






}
