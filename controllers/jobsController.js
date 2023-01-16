const createJob = async (req, res) => {
  res.send("createJob user");
};

const deleteJob = async (req, res) => {
  res.send("Delete Job");
};

const getAllJobs = async (req, res) => {
  res.send("get all jobs user");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
