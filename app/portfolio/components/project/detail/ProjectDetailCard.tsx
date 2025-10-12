import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Content } from "../styles"
import CloseButton from "./CloseButton";
import Overview from "../../../projects/[projectId]/section/overview";
import Implementation from "../../../projects/[projectId]/section/implementation";
import TroubleShooting from "../../../projects/[projectId]/section/troubleShooting";
import ResultReview from "../../../projects/[projectId]/section/resultreview";
import { ProjectDTO } from "@/types/project";

interface Props {
    project?: ProjectDTO;
    section: number;
    onClose: () => void;
}

export default function ProjectDetailCard({ project, section, onClose }: Props) {
    return (
        <Content>
            <Card>
                <CloseButton onClick={onClose} />
                <AnimatePresence mode="wait">
                    {project && (
                        <motion.div
                            key={section}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4 }}
                        >
                            {section === 0 && <Overview data={project.overview} />}
                            {section === 1 && <Implementation data={project.implementation} />}
                            {section === 2 && <TroubleShooting data={project.troubleshootingList} />}
                            {section === 3 && <ResultReview data={project.resultreview} />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </Content>
    );
}
