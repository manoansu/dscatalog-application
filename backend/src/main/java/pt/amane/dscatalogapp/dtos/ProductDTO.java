package pt.amane.dscatalogapp.dtos;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import pt.amane.dscatalogapp.entities.Category;
import pt.amane.dscatalogapp.entities.Product;

public class ProductDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Field NAME is required!")
	@Size(min = 3, max = 60, message = "Field NAME must have min 3 and max 50 characters!")
	private String name;
	
	@NotBlank(message = "Field DESCIPTION is required!")
	private String description;
	
	@Positive(message = "Field PRICE must be Positive!")
	private Double price;
	
	private String imgUrl;
	
	@PastOrPresent(message = "The product DATE should be actual!")
	private Instant date;

	@NotEmpty(message = "uncategorized product is not allowed!")
	List<CategoryDTO> categories = new ArrayList<>();

	public ProductDTO() {

	}

	public ProductDTO(Long id, String name, String description, Double price, String imgUrl, Instant date) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = imgUrl;
		this.date = date;
	}

	public ProductDTO(Product product) {
		super();
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.imgUrl = product.getImgUrl();
		this.date = product.getDate();
	}

	public ProductDTO(Product product, Set<Category> category) {
		this(product);
		category.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public Double getPrice() {
		return price;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public Instant getDate() {
		return date;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

}
