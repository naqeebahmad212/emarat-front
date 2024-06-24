import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backend_url } from "../../../admin/src/components/Navbar";

const ProjectCard = ({ work, isDetailsPage, isMyproject, fetchInfo }) => {
  const [loading, setLoading] = useState(false);

  const deleteHandler = async (id) => {
    setLoading(true);
    await fetch(backend_url + "/delete-project/" + id, {
      method: "Delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success == true) {
          fetchInfo();
        }
      })
      .catch((err) => setLoading(false));
    // await fetchInfo();
  };
  return (
    <>
      <div
        key={work._id}
        className="p-5 box-border bg-gray-100 mb-10 rounded-sm mx-auto drop-shadow-lg w-full mt-5 "
      >
        <h4 className="bold-22 p-5 uppercase">{work.title}</h4>
        <p className="p-5 py-2">Budget: {work.budget}</p>
        <p className="px-5">Duration: {work.duration}</p>
        <p className="px-5 py-2 ">
          Submitted Proposals: {work.proposals.length}
        </p>
        <p className="px-5 my-5 py-2">{work.description}</p>
        {isDetailsPage ? (
          ""
        ) : (
          <div>
            <Link
              to={
                isMyproject
                  ? `/proposals/${work.id}`
                  : `/submit-proposal/${work.id}`
              }
              className="bg-secondary hover:text-gray-10 ml-5 text-white font-bold py-2 px-4 rounded"
            >
              {!isMyproject ? "Submit Proposal" : "View Proposal"}
            </Link>

            {isMyproject && (
              <button
                onClick={() => deleteHandler(work.id)}
                className="bg-red-500 hover:text-gray-10 ml-5 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? "Loading..." : "Delete"}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
