// ================= SOFTWARE DATA =================
const softwareData = {
    autocad3d: {
        title: "AutoCAD 3D",
        use: "3D drafting and modeling of structures",
        jobs: "Draftsman, Designer",
        learn: "Start with 2D → then 3D commands like EXTRUDE, REVOLVE"
    },
    navisworks: {
        title: "Navisworks",
        use: "Clash detection and project coordination",
        jobs: "BIM Coordinator",
        learn: "Used with Revit models for clash checking"
    },
    staad: {
        title: "STAAD Pro",
        use: "Structural analysis and design",
        jobs: "Structural Engineer",
        learn: "Learn load cases, supports, and design commands"
    },
    safe: {
        title: "SAFE",
        use: "Foundation and slab design",
        jobs: "Structural Designer",
        learn: "Used for raft and footing analysis"
    },
    primavera: {
        title: "Primavera",
        use: "Project planning and scheduling",
        jobs: "Planning Engineer",
        learn: "Focus on WBS, Gantt chart, and resource planning"
    },
    infraworks: {
        title: "InfraWorks",
        use: "Infrastructure conceptual design",
        jobs: "Infrastructure Engineer",
        learn: "Used for roads, bridges visualization"
    },
    civil3d: {
        title: "Civil 3D",
        use: "Road design and land development",
        jobs: "Site Engineer",
        learn: "Alignment, profiles, corridors"
    },
    openroads: {
        title: "OpenRoads",
        use: "Advanced road design",
        jobs: "Highway Engineer",
        learn: "Used in large infrastructure projects"
    },
    brim: {
        title: "BRIM",
        use: "Bridge Information Modeling",
        jobs: "Bridge Engineer",
        learn: "Advanced BIM for bridges"
    },
    gis: {
        title: "GIS",
        use: "Mapping and spatial analysis",
        jobs: "GIS Analyst",
        learn: "Use QGIS or ArcGIS basics"
    },
    remote: {
        title: "Remote Sensing",
        use: "Satellite data analysis",
        jobs: "Survey / GIS Engineer",
        learn: "Used with GIS tools"
    }
};

// ================= FUNCTION =================
function openSoftware(key) {
    let data = softwareData[key];

    if (!data) return;

    alert(
        "📌 " + data.title + "\n\n" +
        "Use: " + data.use + "\n\n" +
        "Jobs: " + data.jobs + "\n\n" +
        "How to Learn: " + data.learn
    );
}