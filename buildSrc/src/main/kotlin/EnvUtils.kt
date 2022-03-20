import org.gradle.api.Project
import java.util.*

var localProperties: Properties? = null

fun Project.getExternalProperty(propertyName: String, defaultValue: Any): Any {
    if(localProperties == null){
        localProperties = Properties()
        val file = rootProject.file("local.properties")
        if(file.exists()) {
            localProperties!!.load(java.io.FileInputStream(file))
        }
    }
    if (localProperties!!.getProperty(propertyName) != null ||
        project.findProperty(propertyName) != null ||
        System.getenv(propertyName) != null) {
        val propValue = localProperties!!.getProperty(propertyName) ?: project.findProperty(propertyName) ?: System.getenv(propertyName)
        if (propValue == null || propValue == "") project.logger.warn("No value set for param: $propertyName")
        return propValue
    } else {
        project.logger.info("no environment variable for key $propertyName")
        project.logger.debug("no environment variable for key $propertyName")
        return defaultValue
    }
}