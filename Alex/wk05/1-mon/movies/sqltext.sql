create table movies(
  id serial primary key,
  name varchar(255),
  year varchar(255),
  runtime varchar(255),
  rated varchar(255),
  language varchar(255),
  poster varchar(511),
  imdb varchar(15),
  rottom varchar(15),
  actors varchar(255),
  director varchar(255),
  plot varchar(1023),
  production varchar(255)
);


ALTER TABLE movies ADD runtime varchar(255);




  <ul>
    <% @actors.each do |star|%>
      <li><%= star %></li>
    <% end %>
  </ul> 



  <% @movies.each do |film| %>
    <p><%= film.name %></p>
    <p><%= film.year %></p>
    <p><%= film.rated %></p>
    <p><%= film.runtime %></p>
<% end %>