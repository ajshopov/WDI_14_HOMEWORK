create table movies(
  id serial primary key,
  name varchar(255),
  year varchar(255),
  rated varchar(255)
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