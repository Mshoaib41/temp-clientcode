const { Services } = require("../../models");
const { CustomErrorHandler } = require("../../services");

const ServicesController = {
  async postService(req, res, next) {
    try {
      const { title, description, image } = req.body;
      const service = new Services({
        title,
        description,
        image,
      });

      const savedService = await service.save();

      res.json({
        status: 200,
        message: "Service created successfully",
        data: savedService,
      });
    } catch (error) {
      return next(error);
    }
  },

  async getAllServices(req, res, next) {
    try {
      let query = {};
      if (req.query.id) {
        query._id = req.query.id;
      }

      const services = await Services.find(query);

      if (!services || services.length === 0) {
        return next(CustomErrorHandler.notFound("Services not found"));
      }

      res.json({
        status: 200,
        message: "Services retrieved successfully",
        data: services,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updateService(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, image } = req.body;

      const updatedService = await Services.findByIdAndUpdate(
        id,
        { title, description, image },
        { new: true }
      );

      if (!updatedService) {
        return next(CustomErrorHandler.notFound("Service not found"));
      }

      res.json({
        status: 200,
        message: "Service updated successfully",
        data: updatedService,
      });
    } catch (error) {
      return next(error);
    }
  },

  async deleteService(req, res, next) {
    try {
      const { id } = req.params;
      const deletedService = await Services.findByIdAndDelete(id);

      if (!deletedService) {
        return next(CustomErrorHandler.notFound("Service not found"));
      }

      res.json({
        status: 200,
        message: "Service deleted successfully",
        data: deletedService,
      });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ServicesController;
