<template>
    <div class="main-container">
        <div class="project-container" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>
                <a :href="projectData.ProjectsArray[index].Link">
                {{ projectData.ProjectsArray[index].Title }}
                </a>
            </h2>
            <p>{{ projectData.ProjectsArray[index].About }}</p>
        </div>
    </div>
</template>

<script>
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData
        }
    }
}
</script>

<style scoped>
    @import '../assets/ProjectsSectionStyle.css'
</style>