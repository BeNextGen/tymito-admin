plugins {
    id("com.palantir.docker").version("0.26.0")
}

buildscript {
    repositories {
        mavenCentral()
        maven(url ="https://plugins.gradle.org/m2/")
    }

    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${Versions.kotlin}")
    }
}

allprojects {
    //group =
    version ="0.0.1-SNAPSHOT"

    repositories {
        mavenLocal()
        mavenCentral()
        maven(url ="https://jitpack.io")
    }
}

docker {
    val imageName = project.getExternalProperty("DOCKER_IMAGE_NAME", "").toString()
    copySpec.from("app").into("app")
    copySpec.exclude("**/node_modules/**")
    name = imageName.plus(version)
    uri("tymito/${project.name}:".plus(version))
    copySpec.from("build").into("build")
    pull(false)
    setDockerfile(file("Dockerfile"))
    tag("release", imageName.plus("release"))
    tag("staging", imageName.plus("staging"))
    tag("dev", imageName.plus("dev"))
    tag("branch", imageName.plus(project.getExternalProperty("BUILD_SOURCEBRANCHNAME", "N0_BRANCH").toString()))
    noCache(true)
}

task<org.gradle.api.tasks.Exec>("dockerLogin") {
    group = "docker"
    val login = project.getExternalProperty("DOCKER_REGISTRY_LOGIN", "").toString()
    val password = project.getExternalProperty("DOCKER_REGISTRY_PASSWORD", "").toString()
    val repository = project.getExternalProperty("DOCKER_REGISTRY_URL", "").toString()
    commandLine("docker", "login", "--username", login, "--password-stdin", repository)
    standardInput = password.byteInputStream(Charsets.UTF_8)
}
