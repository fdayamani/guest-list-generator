import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class GuestListGeneratorTest {

    @Test public void
    adds_guest_to_guest_list() {
        List<Guest> guestList = new ArrayList();
        GuestListGenerator generator = new GuestListGenerator(guestList);
        Guest patrick = new Guest("Patrick");

        generator.add(patrick);

        assertThat(guestList.contains(patrick), is(true));
    }
}
