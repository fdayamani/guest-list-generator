import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/api/guestList")
public final class GuestListResource {
    private List<Guest> guestList;

    public GuestListResource(List<Guest> guestList) {
        this.guestList = guestList;
    }

    @POST
    @Consumes("application/json")
    public void add(String guest) {
        guestList.add(new Guest(guest));
        System.out.println(guest);
    }
}
