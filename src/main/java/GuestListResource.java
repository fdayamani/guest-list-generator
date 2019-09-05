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
    public void add(String guestName) {
        guestList.add(new Guest(guestName));
    }

    public static class Guest {
        public final String name;

        public Guest(String name) {
            this.name = name;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Guest guest = (Guest) o;

            return name != null ? name.equals(guest.name) : guest.name == null;

        }

        @Override
        public int hashCode() {
            return name != null ? name.hashCode() : 0;
        }
    }

}
