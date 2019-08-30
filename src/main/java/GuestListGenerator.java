import java.util.List;

public class GuestListGenerator {
    private List<Guest> guestList;

    public GuestListGenerator(List<Guest> guestList) {
        this.guestList = guestList;
    }

    public void add(Guest guest) {
        guestList.add(guest);
    }
}
