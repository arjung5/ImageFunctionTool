using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectForImage.Client.Models
{
    public class ImageParameters
    {
        public int Width { get; set; }
        public int Height { get; set; }


        public int previousWidth { get; set; }
        public int previousHeight { get; set; }

        public int OriginalWidth { get; set; }
        public int OriginalHeight { get; set; }

        public string Ratio { get; set; }
        public string previousRatio { get; set; }
        public int widthToDisplay { get; set; }
        public int heightToDisplay { get; set; }

        public string percentHeight { get; set; }

        public string percentWidth { get; set; }

        public string finalImageName { get; set; }
    }
}
