<template>
  <section id="signup-form" class="">
    <div class="container mb-6 p-6">
      <div class="columns">
        <div class="column is-half p-6 has-background-white">
          <div class="card p-6">
            <h3 class="is-size-3 mb-4">
              Your donation can have a valuable impact!
            </h3>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Firstname" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Lastname" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Donation</label>
              </div>
              <div class="field-body">
                <p class="control">
                  <span class="select">
                    <select>
                      <option>$</option>
                      <option>£</option>
                      <option>€</option>
                    </select>
                  </span>
                </p>
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Amount of money"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half happy-dog mx-6"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.happy-dog {
  background-image: url("~@/assets/happy_dog.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>