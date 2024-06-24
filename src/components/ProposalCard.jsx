const ProposalCard = ({ proposal }) => {
  return (
    <div
      key={proposal._id}
      className="p-5 box-border bg-gray-100 mb-10 rounded-sm mx-auto drop-shadow-lg w-full mt-5 "
    >
      <h4 className="bold-22 p-5 uppercase">{proposal.senderEmail}</h4>
      <p className="px-5 py-2">Phone: {proposal.senderPhone}</p>
      <p className="p-5 py-2">Experience: {proposal.experience}</p>
      <p className="px-5">Price: {proposal.price}</p>
      <p className="px-5">Sent at: {new Date(proposal.date).toDateString()}</p>
      <p className="px-5 py-2 mb-5">Message: {proposal.senderMessage}</p>
    </div>
  );
};

export default ProposalCard;
