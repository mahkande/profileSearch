class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `    <div class="card card-body">
        <div class="row">
          <div class="col-md-3">
            <img src="http://lorempixel.com/640/360
            " alt="">
  
          </div>
        </div>
        <div class="col-md-9">
          <h4>Contact</h4>
          <ul class="list-group">
            <li class="list-group-item">
              name: ${profile.name}
            </li>
            <li class="list-group-item">
              username: ${profile.username}
            </li>
            <li class="list-group-item">
              email: ${profile.email}
            </li>
            <li class="list-group-item">
              address: ${profile.address.street} ${profile.address.city} ${profile.address.zipcode}
            </li>
          </ul>
        </div>
      </div>`
    }
}
