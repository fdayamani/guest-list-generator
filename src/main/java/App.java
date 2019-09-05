import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.FilterHolder;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.jboss.resteasy.plugins.server.servlet.Filter30Dispatcher;
import org.jboss.resteasy.plugins.server.servlet.ResteasyBootstrap;
import org.jboss.resteasy.spi.ResteasyDeployment;

import javax.servlet.DispatcherType;
import javax.servlet.ServletContextEvent;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

public class App {
    private final List<GuestListResource.Guest> guestList;
    private final GuestListResource guestListResource;
    private final Server server;

    public App() {
        guestList = new ArrayList<GuestListResource.Guest>();
        guestListResource = new GuestListResource(guestList);

        server = new Server(8080);
        ServletContextHandler handler = new ServletContextHandler();
        handler.addServlet(DefaultServlet.class, "/");

//        handler.addFilter(new FilterHolder(new Filter30Dispatcher()), "/*", EnumSet.of(DispatcherType.REQUEST));

//        handler.addEventListener(new ResteasyBootstrap() {
//            @Override public void contextInitialized(ServletContextEvent event) {
//                super.contextInitialized(event);
//                ResteasyDeployment deployment = (ResteasyDeployment) event.getServletContext().getAttribute(ResteasyDeployment.class.getName());
//                deployment.getRegistry().addSingletonResource(guestListResource);
//            }
//        });
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
