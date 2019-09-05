import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class GuestListResourceTest {
    List<GuestListResource.Guest> guestList = new ArrayList();
    GuestListResource generator = new GuestListResource(guestList);

    @Test public void
    adds_guest_to_guest_list() {

        generator.add("Patrick");

        assertThat(guestList.contains(new GuestListResource.Guest("Patrick")), is(true));
    }
}
