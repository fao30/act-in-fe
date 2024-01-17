import { RESULT_EDUCATIONAL_PROGRAMS } from "@/libs/constants";
import { Fragment } from "react";
import EducationalProgramBody from "../../_components/EducationalProgramBody";

export default function BusinessAnalyticsEducationalProgram() {
  return (
    <Fragment>
      <EducationalProgramBody data={RESULT_EDUCATIONAL_PROGRAMS.BA} />
    </Fragment>
  );
}
