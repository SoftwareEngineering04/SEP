package subways.mycloset.dto;

//public enum Filter {SPRING, SUMMER, FALL, WINTER}

import lombok.Data;

@Data
public class Filter{
    private int sId;
    private boolean spring;
    private boolean summer;
    private boolean fall;
    private boolean winter;
    private String category;
    private String subCategory;
    private String id;
}