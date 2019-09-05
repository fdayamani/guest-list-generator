import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertTrue;

public class GuestListResourceTest {
    List<Guest> guestList = new ArrayList();
    GuestListResource generator = new GuestListResource(guestList);

    @Test public void
    adds_guest_to_guest_list() {

        generator.add("Patrick");

        assertThat(guestList.contains(new Guest("Patrick")), is(true));
    }
}
