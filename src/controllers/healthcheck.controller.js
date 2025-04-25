const healthcheck = (req, res) => {
    return res.status(200).json({
        status: "success",
        message: "Server is healthy"
    })
}

export { healthcheck } 