<template>
    <div class="main-container">
        <form action="process_contact.php" method="post">
            <div class="form-container">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required v-model="name"> <br>
        </div>
        <div class="form-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required v-model="email"> <br>
        </div>
        <div class="form-container">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea> <br>
        </div>
        <div class="form-container">
            <button @click = "Submit">submit</button>
        </div>
        </form>
    </div>
    <div>
        <h2 v-if="submitted === true"> Thank you {{ name }}, I have received your contact {{ email }}</h2>
        <h2 v-else> I look forward to receiving your contact! </h2>
    </div>

    <div class="home-button">
        <a href="/">Home</a>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const name = ref("")
    const email = ref("")
    const submitted = ref(false)

    const Submit = () => {
        submitted.value = true
    }
</script>

<style scoped>
    .main-container{
    display: flex;
    flex-direction: row;
    background-color: rgb(221, 221, 221);
    border-radius: 5%;
}

    .form-container{
    margin: 20px;
    padding: 10%;
    flex-wrap: 0 0 40%;
    background-color: antiquewhite;
    border-radius: 10px;
    box-shadow: black 0px 1px 1px;
}
    .home-button{
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: antiquewhite;
    }
</style>

