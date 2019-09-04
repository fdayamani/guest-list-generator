import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletContextHandler;

import java.util.ArrayList;
import java.util.List;

public class App {
    private final List<Guest> guestList;
    private final GuestListGenerator guestListGenerator;
    private final Server server;

    public App() {
        guestList = new ArrayList<Guest>();
        guestListGenerator = new GuestListGenerator(guestList);

        server = new Server(8080);
        ServletContextHandler handler = new ServletContextHandler();
        handler.addServlet(DefaultServlet.class, "/");
    }

    public void start() {
        try {
            server.start();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void stop() {
        try {
            server.stop();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
