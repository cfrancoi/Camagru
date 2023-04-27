package com.camagru.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.camagru.model.entity.User;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {


    static final String URL = "/user";

    @Autowired
    private MockMvc mvc;


    @Test
    public void getAll() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get(URL).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
    }

    @Test
    public void createOneAndCount() throws Exception {

        User user = new User();

        user.setFirstName("ads");
        user.setLastName("ads");
        user.setEmail("anpch@example.com");
        
        final Long expectedSize = (long) 1;

        mvc.perform(MockMvcRequestBuilders.post(URL, user).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());

                mvc.perform(MockMvcRequestBuilders.get(URL).accept(MediaType.APPLICATION_JSON))
				    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(expectedSize));
    }


    
}
