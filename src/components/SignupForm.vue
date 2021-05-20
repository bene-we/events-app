<template>
  <section id="signup-form" class="is-info hero is-fullheight">
    <div class="hero-body">
      <div class="container mt-6 p-6">
        <div class="columns">
          <div class="column is-half p-6">
            <div class="card p-6">
              <h3 class="is-size-3 mb-4 mt-4">
                Your donation can have a valuable impact!
              </h3>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input"
                        type="text"
                        placeholder="Firstname"
                      />
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
              <div class="field is-horizontal is-grouped">
                <div class="field-label is-normal">
                  <label class="label">Donation</label>
                </div>
                <div class="field-body">
                  <p class="control is-expanded">
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

              <div class="field is-horizontal mb-4">
                <div class="field-label">
                  <label class="label">Payment Method</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="member" />
                        Credit Card
                      </label>
                      <label class="radio">
                        <input type="radio" name="member" />
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal mb-4">
                <div class="field-label">
                  <label class="label"></label>
                </div>
                <div class="field-body">
                  <div class="control">
                    <button class="button is-danger">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half happy-dog mx-6"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#signup-form {
  padding: 80px 0;
}

.field {
  font-family: $family-roboto;
}

.field-label {
  font-size: 0.9rem;
  @include tablet {
    flex-grow: 2;
  }
}

.happy-dog {
  background-image: url("~@/assets/happy_dog.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>