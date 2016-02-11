import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import javax.swing.JButton;
import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;

/*
 * RadioButtonDemo.java is a 1.4 application that requires these files:
 * images/Bird.gif images/Cat.gif images/Dog.gif images/Rabbit.gif
 * images/Pig.gif
 */
public class start extends JPanel implements ActionListener {
  static String arts = "Art";

  static String maths = "Math";

  static String history = "History";

  static String english = "English";

  static String science= "Science";

    JLabel picture;
    JLabel question1 = new JLabel("What subject are you most interested in?");
    JRadioButton  art = new JRadioButton(arts);
    
    // art.setSelected(true);

    JRadioButton  math = new JRadioButton(maths);

    JRadioButton  historyButton = new JRadioButton(history);

    JRadioButton  englishButton = new JRadioButton(english);

    JRadioButton  scienceButton = new JRadioButton(science);
    JButton Next = new JButton("Next");
  public start() {
    super(new BorderLayout());
     art.setMnemonic(KeyEvent.VK_B);
     art.setActionCommand(arts);
     math.setMnemonic(KeyEvent.VK_C);
     math.setActionCommand(maths);
     historyButton.setMnemonic(KeyEvent.VK_D);
     historyButton.setActionCommand(history);
     englishButton.setMnemonic(KeyEvent.VK_R);
     englishButton.setActionCommand(english);
     scienceButton.setMnemonic(KeyEvent.VK_P);
     scienceButton.setActionCommand(science);


    //Group the radio buttons.
   /* ButtonGroup group = new ButtonGroup();
    group.add( art);
    group.add( math);
    group.add( historyButton);
    group.add( englishButton);
    group.add( scienceButton); */

    //Register a listener for the radio buttons.
     Next.addActionListener(this);
     art.addActionListener(this);
     math.addActionListener(this);
     historyButton.addActionListener(this);
     englishButton.addActionListener(this);
     scienceButton.addActionListener(this);

    //Set up the picture label.
    picture = new JLabel(createImageIcon( "Pal" + ".jpg"));

    //The preferred size is hard-coded to be the width of the
    //widest image and the height of the tallest image.
    //A real program would compute this.
    picture.setPreferredSize(new Dimension(177, 122));

    //Put the radio buttons in a column in a panel.
    JPanel radioPanel = new JPanel(new GridLayout(0, 1));
    radioPanel.add(question1);
    radioPanel.add( art);
    radioPanel.add( math);
    radioPanel.add( historyButton);
    radioPanel.add( englishButton);
    radioPanel.add( scienceButton);
    radioPanel.add(Next); 
    add(radioPanel, BorderLayout.LINE_START);
    add(picture, BorderLayout.NORTH);
    setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
  }

  /** Listens to the radio buttons. */
  public void actionPerformed(ActionEvent e) {
    if(e.getSource() == Next){
	question1 = new JLabel("What college do you belong to?");
	
    }
    else
    picture.setIcon(createImageIcon( e.getActionCommand()
        + ".jpg"));
    if(e.getActionCommand() == "Art"){
	art.setText("Art"); //Example on how to change the text of each question after submit	
    }
  }

  /** Returns an ImageIcon, or null if the path was invalid. */
  protected static ImageIcon createImageIcon(String path) {
    java.net.URL imgURL = start.class.getResource(path);
    if (imgURL != null) {
      return new ImageIcon(imgURL);
    } else {
      System.err.println("Couldn't find file: " + path);
      return null;
    }
  }

  /**
   * Create the GUI and show it. For thread safety, this method should be
   * invoked from the event-dispatching thread.
   */
  private static void createAndShowGUI() {
    //Make sure we have nice window decorations.
    JFrame.setDefaultLookAndFeelDecorated(true);

    //Create and set up the window.
    JFrame frame = new JFrame("PAL Selector Quiz");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    //Create and set up the content pane.
    JComponent newContentPane = new start();
    newContentPane.setOpaque(true); //content panes must be opaque
    frame.setContentPane(newContentPane);

    //Display the window.
    frame.pack();
    frame.setVisible(true);
  }

  public static void main(String[] args) {
    //Schedule a job for the event-dispatching thread:
    //creating and showing this application's GUI.
    javax.swing.SwingUtilities.invokeLater(new Runnable() {
      public void run() {
        createAndShowGUI();
      }
    });
  }
}

           
