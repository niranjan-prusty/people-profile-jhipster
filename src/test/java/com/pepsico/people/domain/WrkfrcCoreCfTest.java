package com.pepsico.people.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.pepsico.people.web.rest.TestUtil;

public class WrkfrcCoreCfTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(WrkfrcCoreCf.class);
        WrkfrcCoreCf wrkfrcCoreCf1 = new WrkfrcCoreCf();
        wrkfrcCoreCf1.setId(1L);
        WrkfrcCoreCf wrkfrcCoreCf2 = new WrkfrcCoreCf();
        wrkfrcCoreCf2.setId(wrkfrcCoreCf1.getId());
        assertThat(wrkfrcCoreCf1).isEqualTo(wrkfrcCoreCf2);
        wrkfrcCoreCf2.setId(2L);
        assertThat(wrkfrcCoreCf1).isNotEqualTo(wrkfrcCoreCf2);
        wrkfrcCoreCf1.setId(null);
        assertThat(wrkfrcCoreCf1).isNotEqualTo(wrkfrcCoreCf2);
    }
}
