package com.pepsico.people.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.pepsico.people.web.rest.TestUtil;

public class WrkfrcCoreCfExtnTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(WrkfrcCoreCfExtn.class);
        WrkfrcCoreCfExtn wrkfrcCoreCfExtn1 = new WrkfrcCoreCfExtn();
        wrkfrcCoreCfExtn1.setId(1L);
        WrkfrcCoreCfExtn wrkfrcCoreCfExtn2 = new WrkfrcCoreCfExtn();
        wrkfrcCoreCfExtn2.setId(wrkfrcCoreCfExtn1.getId());
        assertThat(wrkfrcCoreCfExtn1).isEqualTo(wrkfrcCoreCfExtn2);
        wrkfrcCoreCfExtn2.setId(2L);
        assertThat(wrkfrcCoreCfExtn1).isNotEqualTo(wrkfrcCoreCfExtn2);
        wrkfrcCoreCfExtn1.setId(null);
        assertThat(wrkfrcCoreCfExtn1).isNotEqualTo(wrkfrcCoreCfExtn2);
    }
}
