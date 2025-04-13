import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/projectListLoading";


//This is just for the one element rather than the whole page
export default async function ProjectsPage() {

    return (
        <div className="p-10">
            <h1 className="m-6 text-xl">Projects</h1>

            <div className="m-8">My Repos</div>
            
            <Suspense fallback={<ProjectListLoading />}>
                <ProjectList />
            </Suspense>
        </div>
    )
}